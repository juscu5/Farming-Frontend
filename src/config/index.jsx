const configuration = () => {
  const env = process.env.NODE_ENV || process.env.NODE_ENV === 'development';
  return env ? developmentENV : productionENV;
};

const developmentENV = {
  baseUrl: 'http://127.0.0.1:8000',
  // baseUrl:
  //   'https://mck-phpdev-02.teleperformanceusa.com:413/ph-farming-solution',
};

const productionENV = {
  baseUrl:
    'https://mck-phpdev-02.teleperformanceusa.com:413/ph-farming-solution',
};

export default configuration;
