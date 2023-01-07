import { DateData } from 'react-native-calendars';
import { color } from '../../constants/color';
import { ScheduleItem } from '../../interfaces/contexts/ScheduleContext.interface';
import { OfficeHoursType, HoursFreeType } from '../../interfaces/contexts/ServiceContext.interface';
import { BlockInputType, BlockSearchShowType } from '../../interfaces/screens/DailySearchScreen.interface';
import { hourSize } from '../../styles/Daily.style';

const dayWeek = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday","Sunday"];
const StringToDate = (today:Date,date:string) => {

  const array = date.split(":");
  const hour = Number(array[0])
  const minute = Number(array[1])/60

  return today.getTime() + hour*3600000 + minute*3600000
}
const zero = (chosenDay: DateData) => {

  const day = new Date(chosenDay.dateString)
  const zero_ = day.getTime() - 3600000

  return zero_
}
const duration = (start:Date, end:Date) => {

  return Math.abs(end.getTime() - start.getTime())/36e5
}
const topBlock = (start:Date, top:number) => {

  return Math.abs(top - start.getTime())/36e5
}
const diaryClient = (chosenDay: DateData,schedulesClient:Array<ScheduleItem>) => {

      const day = new Date(chosenDay.dateString)
      const dayCurrent = day.getTime();
      const dayNext = day.getTime() + 24*3600000

      const preDiary:Array<BlockInputType> = schedulesClient.map((date:ScheduleItem) => {

          return{
                  color: "gray",
                  end: new Date(date.dayle.end),
                  start: new Date(date.dayle.start),
                  subtitle: "",
                  title: "Citas pendiente",
                  status: "client"
          }
      })
      const diary:Array<BlockInputType> = preDiary.filter((block:BlockInputType) => (block.start.getTime() > dayCurrent && block.start.getTime() < dayNext))

      return diary
}
const diaryProvider = (chosenDay: DateData,appointments:Array<ScheduleItem>) => {

  const day = new Date(chosenDay.dateString)
  const dayCurrent = day.getTime();
  const dayNext = day.getTime() + 24*3600000

  const preDiary:Array<BlockInputType> = appointments.map((date:ScheduleItem) => {

            return{
                      color: "red",
                      end: new Date(date.dayle.end),
                      start: new Date(date.dayle.start),
                      subtitle: "",
                      title: "Hora Ocupada",
                      status: "provider"
            }
          })
  const diary:Array<BlockInputType> = preDiary.filter((block:BlockInputType) => (block.start.getTime() > dayCurrent && block.start.getTime() < dayNext))
    
          return diary
}
const diaryService = (chosenDay: DateData,officeHours: Array<OfficeHoursType>) => {
  
    const today = new Date(chosenDay.dateString)
    const officeHour: OfficeHoursType | undefined = officeHours.find((officeHour:OfficeHoursType) => officeHour.day == dayWeek[today.getDay()] )
    const hoursFree = officeHour != undefined ? officeHour.hoursFree : []

  const diary:Array<BlockInputType> = hoursFree.map((hourFree:HoursFreeType) => {

      return{
            title: "Hora Libre",
            subtitle: "",
            start: new Date(StringToDate(today,hourFree.start)),
            end:   new Date(StringToDate(today,hourFree.end)),
            color: "#25a9e2",
            status: "hourFree"
      }
  })
  return diary
}
const evaluateLock = (block1:BlockInputType,block2:BlockInputType) => {

  if(block1.start.getTime() <= block2.start.getTime()){
      if(block1.end.getTime() <= block2.start.getTime())        return true
      else /* block1.end.getTime() > block2.start.getTime() */  return false
  }
  else{ // block1.start.getTime() > block2.start.getTime()
      if(block2.end.getTime() <= block1.start.getTime())        return true
      else /* block2.end.getTime() > block1.start.getTime() */  return false
  }
}
const selectionCriteria = (block1:BlockInputType,block2:BlockInputType) => {

    if(block1.status == "client"){
      if     (block2.status == "provider")    return block1
      else /* block2.status == "hourFree" */  return block1
    }
    else if(block1.status == "provider"){
      if     (block2.status == "client")      return block2
      else /* block2.status == "hourFree" */  return block1
    }
    else{ // block1.status == "hourFree"
      if(block2.status == "client")           return block2
      else if(block2.status == "provider")    return block2
      else /* block2.status == "hourFree" */  return block2
    }
}
const mix = (diary:Array<BlockInputType>) => {

    const diaryMatch:Array<BlockInputType> = diary.reduce((all:Array<BlockInputType>,hour:BlockInputType) => {

        if(all.length == 0) return [...all,hour]
        else{
            
            const back:BlockInputType = all[all.length-1]
            
            if(evaluateLock(back,hour)) return [...all,hour]
            else{
                  const choose:BlockInputType = selectionCriteria(back,hour)
                  all.pop()        
              return [...all,choose]
            }
        }
    },[])

    return diaryMatch
}
export const dataShow = (chosenDay: DateData,officeHours: Array<OfficeHoursType>,schedulesClient:Array<ScheduleItem>,schedulesProvider:Array<ScheduleItem>) => {

        const diaryS:Array<BlockInputType> = diaryService(chosenDay,officeHours);
        const diaryC:Array<BlockInputType> = diaryClient(chosenDay,schedulesClient);
        const diaryP:Array<BlockInputType> = diaryProvider(chosenDay,schedulesProvider);

        let preDiary:Array<BlockInputType> = [...diaryC,...diaryP,...diaryS];
        let top = zero(chosenDay);
        
        preDiary.sort((a, b) => a.start.getTime() - b.start.getTime());

        const diary = mix(preDiary)

        const setData:Array<BlockSearchShowType> = diary.map((block:BlockInputType) => {

            const height_ = duration(block.start, block.end) * hourSize;
            const top_ = topBlock(block.start,top) * hourSize;

            top = block.end.getTime(); 

            return {
                    color:block.color,
                    end: block.end,
                    height: height_,
                    start: block.start,
                    subtitle: block.subtitle,
                    title: block.title,
                    top: top_,
                    status: block.status
                    }
        })

    return setData;
}