import React from 'react'
import DatePicker from 'react-datepicker';
import styles from './DatePickerBox.module.scss'

interface DatePickerBoxProps {
    onChangeDate:(data:Date)=>void
    selectedDate:Date
    setSelectedDate:(data:Date)=>void
}

const DatePickerBox:React.FC<DatePickerBoxProps> = ({ onChangeDate, selectedDate, setSelectedDate}) => {
    return (
        <div className={styles.dataPickerBox}>
        <DatePicker className={styles.datepicker}  selected={selectedDate} onChange={onChangeDate} />
      </div>
    )
}

export default DatePickerBox
