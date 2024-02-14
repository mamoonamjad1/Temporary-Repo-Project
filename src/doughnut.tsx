import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  ChartOptions,
  ChartData,
  Plugin,
} from 'chart.js';
import { Typography } from '@mui/material';

ChartJS.register(ArcElement, Tooltip, Legend);

interface DoughnutChartProps {
  data: ChartData<'doughnut'>;
  backgroundColor?: string;
  labelColor?: string;
  legendDisplay?: boolean;
  legendPosition?: 'top' | 'left' | 'bottom' | 'right' ;
  centerText?: string;
  centerTextBelow?: string;
  centerImage?: string; // Ensure you have a default or conditional handling if this is optional
  alignLegend?:string;
  heading?:string;
}

const DoughnutChart: React.FC<DoughnutChartProps> = ({
  data,
  backgroundColor = '#FFF6F6',
  labelColor = '#000',
  legendDisplay = true,
  legendPosition = 'top',
  alignLegend,
  centerText = '', // Default empty string if not provided
  centerTextBelow = '', // Default empty string if not provided
  centerImage, // Optional, handle accordingly
}) => {
  // Define the plugin inside the component to access props
  const centerTextPlugin: Plugin<'doughnut'> = {
    id: 'centerTextPlugin',
    beforeDraw: (chart) => {
      const ctx = chart.ctx;
      const width = chart.width;
      const height = chart.height / 2; // Adjusted for half-doughnut
      ctx.save();
      
      // Only attempt to draw the image if `centerImage` is provided
      if (centerImage) {
        const image = new Image();
        image.src = centerImage;
        image.onload = () => {
          const imageWidth = 64; // Adjust as needed
          const imageHeight = 64; // Adjust as needed
          ctx.drawImage(image, width / 2 - imageWidth / 2, height - imageHeight / 2, imageWidth, imageHeight);
        };
      }

      // Ensure text drawing occurs after image loading; may need further adjustment for timing
      ctx.font = '18px Arial';
      ctx.textAlign = 'center';
      ctx.fillStyle = labelColor; // Use `labelColor` for text
      if (centerText) ctx.fillText(centerText, width / 2, height * 1.6); // Adjust multiplier for positioning
      if (centerTextBelow) ctx.fillText(centerTextBelow, width / 2, height * 1.8); // Adjust multiplier for positioning
      
      ctx.restore();
    },
  };

  const options: ChartOptions<'doughnut'> = {
    responsive: true,
    maintainAspectRatio: false,
    circumference: 180,
    rotation: -90,
    cutout: '80%',
    plugins: {
      legend: {
        display: legendDisplay,
        position: legendPosition,
        align:'start',
        labels: {
          color: labelColor,
          usePointStyle: true,
          pointStyle: 'circle',
         
        },
      },
      tooltip: {
        enabled: false,
      },
    },
  };

  return (
    <div style={{
      width: '450px',
      // height: '225px', // Adjust for half-doughnut view
      border: '1px dashed',
      margin: 'auto',
      backgroundColor,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    }}>
      <Doughnut data={data} options={options} plugins={[centerTextPlugin]} />
    </div>
  );
};

export default DoughnutChart;
