import React from 'react';
//Import Styled Components
import styled from 'styled-components';
//Import FontAwesome
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
/* <form id="form1">
<h3>CREATE ACCOUNT</h3>
<input type="text" placeholder="Email" required></input>
<input type="password" placeholder="Password" required></input>
<input type="password" placeholder="Confirm Password" required></input>
<StyledBtnBox>
    <button type="button" id="Next1">Next</button>
</StyledBtnBox>
</form>


                <form id="form3">
                    <h3>WORKOUT INFORMATION</h3>
                    <h4>Workout Experience</h4>
                    <input type="radio" id="beginner" name="experience" value="beginner"></input>
                        <label for="beginner">Beginner</label>
                    <input type="radio" id="inter" name="experience" value="inter"></input>
                        <label for="inter">Intermediate</label>
                    <input type="radio" id="expert" name="experience" value="expert"></input>
                        <label for="expert">Expert</label>

                    <h4>Desired Time Frame</h4>
                    <input type="radio" id="1month" name="time" value="1month"></input>
                        <label for="1month">1 month</label>
                    <input type="radio" id="3months" name="time" value="3months"></input>
                        <label for="3months">3 months</label>
                    <input type="radio" id="6months" name="time" value="6months"></input>
                        <label for="6months">6 months</label>
                    <input type="radio" id="12months" name="time" value="12months"></input>
                        <label for="12months">12 months</label>

                    <h4>Body Goal</h4>
                    <input type="radio" id="lose" name="goal" value="lose"></input>
                        <label for="lose">Lose</label>
                    <input type="radio" id="gain" name="goal" value="gain"></input>
                        <label for="gain">Gain</label>
                    <input type="radio" id="maintain" name="goal" value="maintain"></input>
                        <label for="maintain">Maintain</label>

                    <h4>Work Out Preference</h4>
                    <input type="radio" id="cardio" name="pref" value="cardio"></input>
                        <label for="cardio">Cardio</label>
                    <input type="radio" id="resist" name="pref" value="resist"></input>
                        <label for="resist">Resistance Training</label>
                    <input type="radio" id="both" name="pref" value="both"></input>
                        <label for="both">Both</label>
                    
                    <StyledBtnBox>
                        <button type="button" id="Back2">Back</button>
                        <button type="submit" id="Submit1">Submit</button>
                    </StyledBtnBox>
                </form>


*/

const InputSection = () => {
    return(
        <div className="input-section">
            <StyledContainer>
                <form id="form1">
                    <h3>PERSONAL INFO</h3>
                    <input type="text" placeholder="Name" required></input>
                    <input type="radio" id="18-24" name="age" value="18-24"></input>
                        <label for="18-24">18 - 24</label>
                    <input type="radio" id="25-34" name="age" value="25-34"></input>
                        <label for="25-34">25 - 34</label>
                    <input type="radio" id="45-54" name="age" value="45-54"></input>
                        <label for="45-54">45 - 54</label>
                    <input type="radio" id="55+" name="age" value="55+"></input>
                        <label for="55+">55+</label>
                    <StyledBtnBox>
                        <button type="button" id="Next1">Next</button>
                    </StyledBtnBox>
                </form>

                <form id="form2">
                    <h3>HEIGHT & WEIGHT</h3>
                    <input type="text" placeholder="Current Height" required></input>
                    <input type="text" placeholder="Current Weight" required></input>
                    <input type="text" placeholder="Goal Weight" required></input>
                    <StyledBtnBox>
                        <button type="button" id="Back1">Back</button>
                        <button type="button" id="Next2">Next</button>
                    </StyledBtnBox>
                </form>



                <StyledStepRow>
                    <div id="progress"></div>
                    <StyledStepCol><small>Step 1</small></StyledStepCol>
                    <StyledStepCol><small>Step 2</small></StyledStepCol>
                    <StyledStepCol><small>Step 3</small></StyledStepCol>
                </StyledStepRow>

            </StyledContainer>
        </div>
    );
};

const StyledContainer = styled.div`
    //display: flex;
    width: 40em;
    height: 40em;
    margin: 8% auto;
    background: #DCE3FF;
    border-radius: 5px;
    position: relative;
    align-items: center;
    h3{
        text-align: center;
        margin-bottom: 35px;
        color: #777;
    }
    form{
        width: 550px;
        position: absolute;
        top: 100px;
        left: 40px;
        input{
            display: flex;
            flex-direction: column;
            width: 100%;
            padding: 15px 5px;
            margin: 28px 0;
            border: 0;
            border-bottom: 1px solid #999;
            outline: none;
            background: transparent;
        }
    }
    #form2{
        left: 650px;
    }
    #form3{
        display: flex;
        left: -550px;
    }
`;

const StyledBtnBox = styled.div`
    width: 100%;
    margin: 20px auto;
    text-align: center;
    button{
        width: 80px;
        height: 30px;
        margin: 0 10px;
        background: linear-gradient(to right, #96A857, #6957A8);
        border-radius: 20px;
        border: 0;
        outline: none;
        color: black;
        cursor: pointer;
    }
`;

const StyledStepRow = styled.div`
    width: 40em;
    height: 40px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    box-shadow: 0 -1px 5px -1px #000;
    position: relative;
    #progress{
        position: absolute;
        height: 100%;
        width: 14em;
        background: linear-gradient(to right, #96A857, #6957A8);
    }
    #progress::after{
        content: '';
        height: 0;
        width: 0;
        border-top: 20px solid transparent;
        border-bottom: 20px solid transparent;
        position: absolute;
        right: -20px;
        top: 0;
        border-left: 20px solid #6957A8;
    }
`;

const StyledStepCol = styled.div`
    width: 20em;
    text-align: center;
    color: black;
    position: relative;
`;

export default InputSection
