import { StoryObj, Meta } from '@storybook/react';
import SemiCirclePieChart from './SemiCirclePieChart';
import icon from './heartIcon.png'
const meta: Meta<typeof SemiCirclePieChart> = {
  title: 'SemiCirclePieChart',
  component: SemiCirclePieChart,
  argTypes: {
    data: {
      control: 'object',
      description: 'Data for the pie chart',
    },
    title: {
      control: 'text',
      description: 'Title of the pie chart',
    },
    graphHeading: {
      control: 'text',
      description: 'Heading above the legend',
    },
    colors: {
      control: 'array',
      description: 'Array of colors for the pie chart segments',
    },
    legendAlign: {
      control: { type: 'select', options: ['left', 'center', 'right'] },
      description: 'Horizontal alignment of the legend',
    },
    legendVerticalAlign: {
      control: { type: 'select', options: ['top', 'middle', 'bottom'] },
      description: 'Vertical alignment of the legend',
    },
    legendLayout: {
      control: { type: 'select', options: ['horizontal', 'vertical'] },
      description: 'Layout of the legend',
    },
  },
};

export default meta;

type Story = StoryObj<typeof SemiCirclePieChart>;

export const Base: Story = {
  args: {
    data: [
      { levelName: 'Blossom', count: 60 },
      { levelName: 'Buds', count: 20 },
      { levelName: 'Sprouts', count: 4 },
    ],
    graphHeading: 'Dev Goals',
    title: `Recommended Levels <br> BUDS`,
    colors: ["#FFC0CB", "#FF69B4", "#FF1493"],
    // Default legend configuration
    legendAlign: 'left',
    legendVerticalAlign: 'top',
    legendLayout: 'horizontal',
  },
};
