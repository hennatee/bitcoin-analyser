import { useState } from "react"
import { dateToUnix } from './utils'
import bitcoinService from './bitcoinService'

/**
 * This component displays form for getting user input of start date and end date and sends
 * request to CoinGecko API when submitted. 
 *  
 * @param {function} callbackToParent Callback function to return form data and API response to 
 * the parent component.
 */
const DateForm = ({callbackToParent}) => {

  const [startDate, setStartDate] = useState('')
  const [endDate, setEndDate] = useState('')

  const handleSubmit = async event => {
    event.preventDefault();
    
    const start = dateToUnix(startDate);
    //1 hour (3600s) is added to the end date to get full data from that day
    const end = dateToUnix(endDate) + 3600;
  
    try {
      const response = await bitcoinService.getHistoryByRange(start, end);
      const data = {
        startUnix: start,
        endUnix: end, 
        response: response 
      }
      callbackToParent(data);
    } catch (error) {
      console.log(error);
    }
  
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Aloitus pvm</label><br/>
        <input 
          type="date" 
          id="inputDate" 
          name="startInput"
          required
          onChange={({ target }) => setStartDate(target.value)}>
        </input><br/>
        <label>Lopetus pvm</label><br/>
        <input 
          type="date" 
          id="inputDate" 
          name="endInput"
          required
          onChange={({ target }) => setEndDate(target.value)}>
        </input><br/>
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default DateForm;