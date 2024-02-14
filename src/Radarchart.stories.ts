import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import MyRadarChart from './RadarChart'; // Ensure the correct import path

// Assuming MyRadarChart is the updated component with the new props
const meta: Meta<typeof MyRadarChart> = {
    title: 'RadarChart', // Updated title for consistency
    component: MyRadarChart,
    argTypes: {
        backgroundColor: { control: 'color' },
        innerTriangleColor: { control: 'color' }, // Added control for innerTriangleColor
        innerTriangleBorderColor: { control: 'color' }, // Added control for innerTriangleBorderColor
    },
};

export default meta;

type Story = StoryObj<typeof MyRadarChart>;

export const Base: Story = {
    args: {
        backgroundColor: '#FFFFFF', // Default background color
        data: [
          { subject: "Hands", A: 1, fullMark: 4 },
          { subject: "Heart", A: 4, fullMark: 4 },
          { subject: "Head", A: 3, fullMark: 4 },
        ], // Default data
        innerTriangleColor: 'blue', // Default inner triangle color
        innerTriangleBorderColor: 'black', // Default inner triangle border color
    }
};
