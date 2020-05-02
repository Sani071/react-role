import React, { useState } from "react";
import Select from "../common/Select";
import Button from "../common/Button";
import Spinner from "../common/Spinner";
import { useDispatch, useSelector } from "react-redux";
import { basicInformationAction } from "../../store/actions/user/userProfile";
export default function BasicInformationProfile({ history }) {
  const [day, setDay] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");
  const [gender, setGender] = useState("");
  const [nationality, setNationality] = useState("");
  const [occupation, setOccupation] = useState("");
  const [errors, setErrors] = useState({});

  const loading = useSelector(state => state.meta.isLoading);
  const occupations = useSelector(state => state.info.occupations);
  let dayOptions = [
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
  ];
  let monthOptions = [
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
  ];
  let yearOptions = [
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
  ];
  let genderOptions = ["Male", "Female", "Other"];
  let nationalityOptions = ["Bangladeshi", "Cadana"];
  let occupationOptions = ["Freelancer", "doctor"];

  const dispatch = useDispatch();
  const submitHandler = e => {
    e.preventDefault();
    //   console
    if (!lastStepper()) {
      return;
    }

    let data = {
      birthDay: day + " " + month + " " + year,
      gender,
      nationality,
      occupation
    };
    dispatch(basicInformationAction(data, history));
    // console.log(data)
  };

  const lastStepper = () => {
    if (!day || !month || !year || !gender || !nationality || !occupation) {
      let newError = { ...errors };

      if (!day || !month || !year) {
        newError.birth = "Day, Month, Year  is required";
      } else {
        newError.birth = "";
      }
      if (!gender) {
        newError.gender = "gender is required";
      } else {
        newError.gender = "";
      }
      if (!nationality) {
        newError.nationality = "nationality is required";
      } else {
        newError.nationality = "";
      }
      if (!occupation) {
        newError.occupation = "occupation is required";
      } else {
        newError.occupation = "";
      }
      console.log(newError);
      setErrors(newError);
      return false;
    }
    return true;
  };
  return (
    <div className="basic-infornmation-profile">
      <div className="bip-inner">
        <div className="bip-inner-content">
          <div className="bip-inner-content-inner">
            <div className="verification-successful-ara">
              <h3>
                Verification Successful{" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="64"
                  height="64"
                  viewBox="0 0 64 64"
                  fill="none"
                >
                  <path
                    d="M32 64C14.3545 64 0 49.6455 0 32C0 14.3545 14.3545 0 32 0C49.6455 0 64 14.3545 64 32C64 49.6455 49.6455 64 32 64ZM32 4C16.5601 4 4 16.5601 4 32C4 47.4399 16.5601 60 32 60C47.4399 60 60 47.4399 60 32C60 16.5601 47.4399 4 32 4Z"
                    fill="#19D49C"
                  />
                  <path
                    d="M29.002 42.667C28.4897 42.667 27.978 42.4727 27.5884 42.0806L18.9219 33.4141C18.1406 32.6323 18.1406 31.3657 18.9219 30.5845C19.7031 29.8032 20.9697 29.8032 21.7515 30.5845L29.0044 37.8379L44.9248 21.918C45.7061 21.1367 46.9727 21.1367 47.7539 21.918C48.5352 22.6992 48.5352 23.9658 47.7539 24.7471L30.4204 42.0806C30.0259 42.4727 29.5142 42.667 29.002 42.667Z"
                    fill="#19D49C"
                  />
                </svg>
              </h3>
            </div>

            <h2>
              We need some basic informations to build your profile (Mandatory)
            </h2>
            <form onSubmit={submitHandler}>
              <div className="bip-inner-content-form">
                <div className="date-input-area">
                  <p>Birthday:</p>
                  <div className="date-input-select">
                    <div className="date-input-select-top">
                      <Select
                        placeholder="Day"
                        options={dayOptions}
                        onChange={e => setDay(e.target.value)}
                      />
                      <Select
                        placeholder="Mon"
                        options={monthOptions}
                        onChange={e => setMonth(e.target.value)}
                      />
                      <Select
                        placeholder="Year"
                        options={yearOptions}
                        onChange={e => setYear(e.target.value)}
                      />
                    </div>

                    {errors.birth && (
                      <div className="w-100">
                        <div className="invalid-feedback">{errors.birth}</div>
                      </div>
                    )}
                  </div>
                </div>

                <Select
                  placeholder="Gender"
                  leftIcon="fas fa-venus-mars"
                  options={genderOptions}
                  onChange={e => setGender(e.target.value)}
                  error={errors.gender}
                />
                <Select
                  placeholder="Nationality"
                  leftIcon="fas fa-flag"
                  options={nationalityOptions}
                  onChange={e => setNationality(e.target.value)}
                  error={errors.nationality}
                />
                <Select
                  placeholder="Occupation"
                  leftIcon="fas fa-briefcase"
                  onChange={e => setOccupation(e.target.value)}
                  options={occupations}
                  error={errors.occupation}
                />
                <Button
                  text={loading ? <Spinner></Spinner> : "Submit"}
                  type="submit"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
