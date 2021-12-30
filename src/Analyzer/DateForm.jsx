import { useState } from "react";
import { dateToUnix, isSameDay, datesAreNotInPast} from "../utils";
import bitcoinService from "../bitcoinService";
import { 
  AnalyzerContainer, 
  DateInput, 
  FormLabel, 
  Button, 
  FormRow, 
  NotificationText 
} from "../styledComponents";

/**
 * This component displays form for getting user input of start date and end date and sends
 * request to CoinGecko API when form is submitted. 
 *  
 * @param {function} callbackToParent Callback function to return form data and API response to 
 * the parent component.
 */
const DateForm = ({callbackToParent}) => {

  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [notification, setNotification] = useState("");

  const HOUR_IN_SECONDS = 60 * 60; //3600s

  const handleSubmit = async event => {
    event.preventDefault();

    if (datesAreValid(startDate, endDate)) {
      const start = dateToUnix(startDate);
      //1h is added to the end date to get full data from that day
      const end = dateToUnix(endDate) + HOUR_IN_SECONDS;
  
      try {
        const response = await bitcoinService.getHistoryByRange(start, end);
        const data = {
          startUnix: start,
          endUnix: end, 
          response: response 
        }
        callbackToParent(data);
        setNotification("");
      } catch (error) {
        console.log(error);
        setNotification("Something went wrong, please try again!");
      }
    } 
  }

  /** Check that dates are valid for the api request */
  const datesAreValid = (startDate, endDate) => {
    const start = new Date(startDate);
    const end = new Date(endDate);
    if (datesAreNotInPast(start, end)) {
      setNotification("Ooops! Both dates should be in the past.");
      return false;
    }
    if (end < start) {
      setNotification("Ooops! Start date should be before end date.");
      return false;
    }
    if (isSameDay(start, end)) {
      setNotification("Oooops! Dates should be different.");
      return false;
    }
    setNotification("");
    return true;

  }

  return (
    <AnalyzerContainer className="form">
      <form onSubmit={handleSubmit}>
        <FormRow>
          <div>
            <FormLabel>Start date</FormLabel><br/>
            <DateInput 
              type="date" 
              id="inputDate" 
              name="startInput"
              required
              onChange={({ target }) => setStartDate(target.value)}>
            </DateInput>
          </div>
          <div>
            <FormLabel>End date</FormLabel><br/>
            <DateInput
              type="date" 
              id="inputDate" 
              name="endInput"
              required
              onChange={({ target }) => setEndDate(target.value)}>
            </DateInput>
          </div>
        </FormRow>
        <FormRow>
          <Button className="submit" type="submit">Analyze</Button>
          <NotificationText>{notification}</NotificationText>
        </FormRow>
      </form>
    </AnalyzerContainer>
  )
}

export default DateForm;