const initialState = {
  baseUrl: "http://3.12.109.38:8000/roytter/api/v1",
  url: "http://3.12.109.38:8000/",
  // baseUrl: "http://localhost:8000/roytter/api/v1",
  // url: "http://localhost:8000/",
  occupations: [
    "Banker",
    "Doctor",
    "Freelancer",
    "Architect",
    "Carpenter",
    "Cartoonist",
    "Photographer",
    "Sculptor",
    "Air Technician",
    "Businessman",
    "Engineer",
    "Associate Director",
    "Chief Exicutive Director",
    "Contractor",
    "Development Manager"
  ],
 dayOptions:[
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11,
    12,
    13,
    14,
    15,
    16,
    17,
    18,
    19,
    20,
    21,
    22,
    23,
    24,
    25,
    26,
    27,
    28,
    29,
    30,
    31
  ],
   monthOptions :[
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "may",
    "Jun",
    "Jui",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec"
  ],
   yearOptions:[
    1901,
    1902,
    1903,
    1904,
    1905,
    1906,
    1907,
    1908,
    1909,
    1910,
    1911,
    1912,
    1913,
    1914,
    1915,
    1916,
    1917,
    1918,
    1919,
    1920,
    1921,
    1922,
    1923,
    1924,
    1925,
    1926,
    1927,
    1928,
    1929,
    1930,
    1931,
    1932,
    1933,
    1934,
    1935,
    1936,
    1937,
    1938,
    1939,
    1940,
    1941,
    1942,
    1943,
    1944,
    1945,
    1946,
    1947,
    1948,
    1949,
    1950,
    1951,
    1952,
    1953,
    1954,
    1955,
    1956,
    1957,
    1958,
    1959,
    1960,
    1961,
    1962,
    1963,
    1964,
    1965,
    1966,
    1967,
    1968,
    1969,
    1970,
    1971,
    1972,
    1973,
    1974,
    1975,
    1976,
    1977,
    1978,
    1979,
    1980,
    1981,
    1982,
    1983,
    1984,
    1985,
    1986,
    1987,
    1988,
    1989,
    1990,
    1991,
    1992,
    1993,
    1994,
    1995,
    1996,
    1997,
    1998,
    1999,
    2000,
    2001,
    2002,
    2003,
    2004,
    2005,
    2006,
    2007,
    2008
  ]
};

export default (state = initialState, action) => {
  switch (action.type) {
    default: {
      return state;
    }
  }
};

// /http://localhost:3000/forgot_password_mail_verification