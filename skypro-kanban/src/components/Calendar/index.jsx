// import { ru } from "date-fns/locale";
// import { format } from "date-fns/format";
// import * as S from "./calendar.styled";
// import { useState } from "react";

import "react-day-picker/dist/style.css";

// export const dayClick = (selected) => {
// const dueDate = format(selected, "dd.MM.yy", { locale: ru })

//   return dueDate;
// };

export const Calendar = () => {
  // const [selected, setSelected] = useState();

  return (
    // <S.PopNewCardCalendar>
      {/* <S.CalendarTtl>Даты</S.CalendarTtl>
      <S.CalendarBlock>
        <S.CalendarContent>
          <S.StyledDatePicker
            mode="single"
            selected={selected}
            onSelect={setSelected}
            locale={ru}
          />
        </S.CalendarContent>
        <S.CalendarPeriod>
          {!selected && (
            <S.CalendarPDateEnd> Выберите срок исполнения. </S.CalendarPDateEnd>
          )}
          {selected && (
            <S.CalendarPDateEnd>
              Срок исполнения:
              <span>{format(selected, "dd.MM.yy", { locale: ru })} </span>
            </S.CalendarPDateEnd>
          )}
        </S.CalendarPeriod>
      </S.CalendarBlock> */}
    // </S.PopNewCardCalendar>
  );
};