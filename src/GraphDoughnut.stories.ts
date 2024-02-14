// Assuming the file is DoughnutChart.stories.ts
import { Meta, StoryObj } from "@storybook/react";
import DoughnutChart from "./doughnut"; // Ensure the correct import path is used
import { ChartData } from "chart.js";

const meta: Meta<typeof DoughnutChart> = {
  title: "DoughnutChart",
  component: DoughnutChart,
  argTypes: {
    backgroundColor: { control: "color" },
    labelColor: { control: "color" },
    legendDisplay: { control: "boolean" },
    legendPosition: {
      control: { type: "select", options: ["top", "left", "bottom", "right"] },
    },
    centerText: { control: "text" }, // New control for center text
    centerTextBelow: { control: "text" }, // New control for text below the center text
    centerImage: { control: "text" }, // New control for center image (URL)
    alignLegend: { control: "text" }, // New control for center image (URL)
  },
};
export default meta;

const defaultChartData: ChartData<"doughnut"> = {
  labels: ["Sprouts", "Buds", "Blossoms"],
  datasets: [
    {
      data: [60, 30, 10],
      backgroundColor: ["#FFC0CB", "#FF69B4", "#FF1493"],
      hoverBackgroundColor: ["#FFB6C1", "#FF6EB4", "#FF69B4"],
      borderWidth: 1,
    },
  ],
};

export const Base: StoryObj<typeof DoughnutChart> = {
  args: {
    backgroundColor: "#FFF6F6", // Default background color
    data: defaultChartData,
    labelColor: "#000000", // Default label color
    legendDisplay: true, // Show legend by default
    legendPosition: "top", // Default legend position
    centerText: "Main Text", // Example center text
    centerTextBelow: "Sub Text", // Example text below the center text
    centerImage: "", // Example center image URL (leave empty or provide a valid URL)
    alignLegend: "start", // Example legend alignment
    heading: "Doughnut Chart", // Example heading
  },
};
