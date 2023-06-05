import Chart from "react-apexcharts";

const ChartComponent = () => {
  const options = {
    selection: false,
    colors: ["#0346F2"],
    fill: {
      type: "gradient",
      gradient: {
        shadeIntensity: 1,
        opacityFrom: 0.3,
        opacityTo: 0.9,
        stops: [100, 90, 0],
      },
    },
    chart: {
      id: "area",
      height: "100%",
      width: 100,
      toolbar: {
        show: false,
        offsetX: 0,
        offsetY: 0,
        tools: {
          selection: false,
          download: false,
          zoom: false,
          zoomin: false,
          customIcons: [],
          reset: false,
        },
      },
    },
    xaxis: {
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
      crosshairs: {
        show: false,
      },
      dropShadow: {
        enabled: false,
      },
      tooltip: {
        enabled: false,
      },
      floating: true,
      labels: {
        show: false,
      },
    },
    dataLabels: {
      enabled: false,
    },
    yaxis: {
      showAlways: false,
      show: false,
      labels: {
        show: true,
      },
      axisBorder: { show: false },
      axisTicks: { show: false },
    },
    grid: {
      padding: {
        left: -40,
        right: -50,
      },
      show: false,
    },
  };

  const series = [
    {
      name: "$",
      data: [950, 1020, 1000, 1000, 950, 1000],
    },
  ];

  return (
    <div className="flex flex-col rounded-2xl shadow-sm relative min-h-[173px] max-w-[338px] bg-white mb-2 order-2 sm:col-start-2 sm:max-h-[270px]">
      <h5 className="text-[#1A1E2C] font-bold text-[16px] pl-8 pt-4">
        Visualizações
      </h5>
      <Chart series={series} options={options} type="area" />
    </div>
  );
};

export default ChartComponent;
