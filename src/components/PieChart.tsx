import React, { useEffect, useRef } from "react";
import { ECharts, EChartsOption } from "echarts";
import * as echarts from "echarts"; // 使用命名导入语法

interface PieChartProps {
  data: { name: string; value: number }[];
  title?: string;
  style?: React.CSSProperties;
}

const PieChart: React.FC<PieChartProps> = ({ data, title, style }) => {
  const chartRef = useRef<HTMLDivElement>(null);
  let chartInstance: ECharts | null = null;

  useEffect(() => {
    if (chartRef.current) {
      chartInstance = echarts.init(chartRef.current);
      const option: EChartsOption = {
        title: {
          text: title || "",
          left: "center",
        },
        tooltip: {
          trigger: "item",
          formatter: "{b} -  {d}%",
        },
        series: [
          {
            name: "",
            type: "pie",
            radius: "55%",
            center: ["50%", "60%"],
            data,
            emphasis: {
              itemStyle: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: "rgba(0, 0, 0, 0.5)",
              },
            },
          },
        ],
      };
      chartInstance.setOption(option);

      // Optional: If you want the chart to resize when the window resizes
      const resizeHandler = () => chartInstance?.resize();
      window.addEventListener("resize", resizeHandler);
      return () => {
        window.removeEventListener("resize", resizeHandler);
      };
    }
  }, [data, title]);

  return <div ref={chartRef} style={style} />;
};

export default PieChart;
