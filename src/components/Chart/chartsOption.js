export const barDefaultItemOption = {
  barCategoryGap: '80%',
  itemStyle: {
    barBorderRadius: [10, 10, 0, 0]
  }
};
export const liquidFillDefaultItemOption = {
  radius: '70%',
  center: ['50%', '50%'],
  silent: true,
  backgroundStyle: {
    borderWidth: 0,
    borderColor: '#1daaeb',
    color: '#fff'
  },
  outline: {
    show: true,
    borderDistance: 5,
    itemStyle: {
      borderWidth: 4
    }
  },
  label: {
    normal: {
      textStyle: {
        fontSize: 20
      }
    }
  }
};
export const pieDefaultItemOption = {
  radius: ['50%', '70%'],
  center: ['50%', '50%'],
  label: {
    normal: {
      show: false,
      position: 'center'
    }
  },
  labelLine: {
    normal: {
      show: false
    }
  }
};

export const funnelDefaultItemOption = {
  label: {
    normal: {
      position: 'inside',
      formatter: function(params) {
        return `${params.data.actualValue}%`;
      },
      textStyle: {
        color: '#000',
        fontSize: 16
      }
    },
    emphasis: {
      position: 'inside',
      formatter: function(params) {
        return `${params.name}实际${params.data.actualValue}%`;
      },
      textStyle: {
        color: 'white'
      }
    }
  }
};
