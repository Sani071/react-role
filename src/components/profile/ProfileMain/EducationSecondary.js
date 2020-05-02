import React, { useState, useEffect } from "react";
import SummerNote from "../../common/SummerNote";
import Button from "../../common/Button";
import { useDispatch, useSelector } from "react-redux";
import { updateIntro } from "../../../store/actions/user/userProfile";
import Spinner from "../../common/Spinner";
import Input from "../../common/Input";
import Select from "../../common/Select";
import { MDBInput} from "mdbreact"
const EducationSecondary = () => {
    const [intro, setIntro] = useState("");
    const [editCheck, setEditCheck] = useState(true);
    const [month, setMonth] = useState("");
    const [year, setYear] = useState("");
    const [errors, setErrors] = useState({});

    const monthOptions = useSelector(state => state.info.monthOptions);
    const yearOptions = useSelector(state => state.info.yearOptions);
    const user = useSelector(state => state.auth.user);
    const loading = useSelector(state => state.meta.isLoading);
    useEffect(() => {
        setIntro(user.intro);
        // setEditCheck(false);
    }, [user]);

    const dispatch = useDispatch();

    const onChange = val => {
        console.log(val);
        setIntro(val);
    };
    const submitHandler = e => {
        e.preventDefault();
        let data = {
            intro
        };
        dispatch(updateIntro(data));
        // editChangeHandler()
        console.log(data);
    };

    const editChangeHandler = () => {
        setEditCheck(!editCheck);
    };

    let disableChecker;
    if (intro.length < 1 || intro.length > 200) {
        disableChecker = true;
    }
    return (
        <div className="basic-intro-item custom-item-input custom-select-area education-sitting-area">
            <div className="bii-header">
                <div className="intro-item">
                    <i class="fas fa-user"></i>
                    <p className="f-16">Secondary School</p>
                </div>
                {!editCheck && (
                    <span className="edit" onClick={editChangeHandler}>
                        Edit
                    </span>
                )}
            </div>

            {!editCheck && (
                <div className="basic-education-item-data ">
                    <div className="education-list">
                        <ul>
                            <li>
                                <h5>Institution Name:</h5>
                                <h6>NKBS Elementary School</h6>
                            </li>


                            <li>
                                <h5>Institution Location:</h5>
                                <h6>Moulvibazar, Sylhet</h6>
                            </li>


                            <li>
                                <h5>Date</h5>
                                <h6>August 2019 to Present</h6>
                            </li>

                            <li className="privacy">
                                <h5>Privacy</h5>
                                <h6>Only Me <i class="fas fa-lock"></i></h6>
                            </li>

                        </ul>
                    </div>
                </div>
            )}

            {editCheck && (
                <form onSubmit={submitHandler}>
                    <Input 
                        placeholder="Enter name of your institution"
                    />
                    <Input
                        placeholder="Enter your institution location"
                    />
                    <div className="from-running-area">
                        <div className="date-input-area">
                            <p>From</p>
                            <div className="date-input-select">
                                <div className="date-input-select-top">
                                   
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
                        <div className="running-area">
                            <MDBInput
                                label="Running"
                filled
                type="checkbox"
                id="checkbox1"
              />
                        </div>
                    </div>
                    <div className="privacy-area">
                        <Select
                            placeholder="Who can see your secondary school?"
                        />
                    </div>
                    
                    <div className="basic-action-area">
                        <Button
                            classNames={["profile-cancel"]}
                            text="Cancel"
                            type="button"
                            onClick={editChangeHandler}
                        />
                        <Button
                            classNames={["profile-save"]}
                            text={loading.updateIntro ? <Spinner /> : "Save"}
                            type="submit"
                            disabled={disableChecker ? true : false}
                        />
                    </div>
                </form>
            )}
        </div>
    );
}

export default EducationSecondary;
