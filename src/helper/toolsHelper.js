import date from 'date-and-time';
import moment from 'moment';

class ToolsHelper {
    static difference_date(last_seen) {
      const now = new Date();
      let today = moment([date.format(now, 'YYYY'), date.format(now, 'MM'), date.format(now, 'DD')]);
      let parsed_last_seen = moment([last_seen.substring(0, 4), last_seen.substring(5, 7), last_seen.substring(8, 10)]);
      let difference = today.diff(parsed_last_seen, 'days');
      
      if (difference > 365) {
        return today.diff(parsed_last_seen, 'years') + ' year(s)';
      } else if (difference > 30 && difference < 365) {
        return today.diff(parsed_last_seen, 'months') + ' month(s)';
      } else if (difference < 30 && difference !== 0) {
        return today.diff(parsed_last_seen, 'days') + ' day(s)';
      } else if (difference === 0) {
        return ('Today');
      }
    }

    static remaining_time(coming_date) {
      const now = new Date();
      let today = moment([date.format(now, 'YYYY'), date.format(now, 'MM'), date.format(now, 'DD')]);
      let parsed_coming_date = moment([coming_date.substring(0, 4), coming_date.substring(5, 7), coming_date.substring(8, 10)]);
      let difference = parsed_coming_date.diff(today, 'days');

      if (difference > 365) {
        return parsed_coming_date.diff(today, 'years') + ' year(s)';
      } else if (difference > 30 && difference < 365) {
        return parsed_coming_date.diff(today, 'months') + ' month(s)';
      } else if (difference < 30 && difference !== 0) {
        return parsed_coming_date.diff(today, 'days') + ' day(s)';
      } else if (difference === 0) {
        return ('Today');
      }
    }

    static get_day_from_date(coming_date) {
      let new_date = date.parse(coming_date.substring(0, 10), 'YYYY-MM-DD') + '.'; 
      let parsed_date = new_date.substring(0, 15);
      return parsed_date;
    }
  }
  
  export default ToolsHelper;
  