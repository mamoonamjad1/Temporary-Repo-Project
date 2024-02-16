import React from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

interface SemiCirclePieChartData {
  levelName: string;
  count: number;
}

interface SemiCirclePieChartProps {
  data: SemiCirclePieChartData[];
  title: string;
  graphHeading?: string; // Optional prop for graph heading
  colors?: string[]; // Optional prop for custom colors
  legendAlign?: "left" | "center" | "right"; // Custom legend alignment
  legendVerticalAlign?: "top" | "middle" | "bottom"; // Custom legend vertical alignment
  legendLayout?: "horizontal" | "vertical"; // Custom legend layout
  chartTitleImage?:string; // Optional prop for chart title image
}

const SemiCirclePieChart: React.FC<SemiCirclePieChartProps> = ({
  data,
  title,
  colors,
  graphHeading,
  legendAlign = "center", // Default alignment
  legendVerticalAlign = "bottom", // Default vertical alignment
  legendLayout = "horizontal", // Default layout
}) => {
  // Transform the data to the format expected by Highcharts
  const transformedData = data.map((item) => ({
    name: item.levelName,
    y: item.count,
  }));

  const options: Highcharts.Options = {
    chart: {
      plotBorderWidth: 0,
      plotShadow: false,
      type: "pie",
    },
    title: {
      text: title,
      align: "center",
      verticalAlign: "middle",
      style: {
        fontSize: "16px",
      },
    },
    colors: colors,
    tooltip: {
      pointFormat: "{series.name}: <b>{point.percentage:.1f}%</b>",
    },
    legend: {
      enabled: true,
      layout: legendLayout,
      align: legendAlign,
      verticalAlign: legendVerticalAlign,
      itemMarginTop: 5,
      itemMarginBottom: 5,
    },
    plotOptions: {
      pie: {
        dataLabels: {
          enabled: true,
          format: "{point.percentage:.1f}%",
          distance: -20,
          style: {
            color: "black",
            fontSize: "15px",
            textOutline: "0px",
          },
        },
        startAngle: -90,
        endAngle: 90,
        center: ["50%", "50%"],
        size: "100%",
        showInLegend: true,
      },
    },
    series: [
      {
        type: "pie",
        name: "Dev Goals Progress",
        innerSize: "70%",
        data: transformedData,
      },
    ],
  };

  return (
    <Card sx={{ maxWidth: 345, margin: "auto", overflow: "hidden" }}>
      <CardContent sx={{ padding: 0 }}>
        {graphHeading && ( // Conditionally render the heading if it's provided
          <Typography variant="h6" component="div" sx={{ pl: 2, pt: 2 }}>
            {graphHeading}
          </Typography>
        )}
        <HighchartsReact highcharts={Highcharts} options={options} />
      </CardContent>
    </Card>
  );
};

export default SemiCirclePieChart;
