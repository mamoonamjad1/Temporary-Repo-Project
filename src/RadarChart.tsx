import React from 'react';
import {
  Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer,
} from 'recharts';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { Typography, Box } from '@mui/material';
import CircleIcon from '@mui/icons-material/Circle';

// Props type definition
interface MyRadarChartProps {
  backgroundColor?: string;
  data: Array<{ subject: string; A: number; fullMark: number }>;
  innerTriangleColor?: string; // Corrected: Type should be string
  innerTriangleBorderColor?: string; // Corrected: Type should be string
}

// Corrected: Set default values for innerTriangleColor and innerTriangleBorderColor in the component function
const MyRadarChart: React.FC<MyRadarChartProps> = ({
  backgroundColor = '#FFFFFF',
  data,
  innerTriangleColor = 'blue', // Default value set here
  innerTriangleBorderColor = 'black', // Default value set here
}) => {
  return (
    <Card variant="outlined" style={{ maxWidth: 400, margin: 'auto', backgroundColor }}>
      <CardContent style={{ paddingBottom: '0px' }}>
        <ResponsiveContainer width="100%" height={350}>
          <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data}>
            <PolarGrid gridType="polygon" stroke="black" />
            <PolarAngleAxis dataKey="subject" />
            <PolarRadiusAxis angle={90} domain={[0, 4]} stroke="black" />
            <Radar
              name="Average Milestone Scores"
              dataKey="A"
              stroke={innerTriangleBorderColor}
              fill={innerTriangleColor}
              fillOpacity={0.6}
            />
          </RadarChart>
        </ResponsiveContainer>
      </CardContent>
      <Typography variant="subtitle1" align="center" style={{ paddingBottom: 4 }}>
        <Box display="flex" alignItems="center" justifyContent="center">
          <CircleIcon style={{ marginRight: 4, color: innerTriangleColor }} /> {/* Updated to reflect innerTriangleColor */}
          Average Milestone Scores
        </Box>
      </Typography>
    </Card>
  );
};

export default MyRadarChart;
