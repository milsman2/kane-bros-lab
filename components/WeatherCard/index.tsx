import { Properties, Period } from '../../interfaces/Weather';
import { ReactElement } from 'react';
import { formatInTimeZone } from 'date-fns-tz';

type PropertiesProp = Pick<Properties, 'periods'>;

export function WeatherCard({ periods }: PropertiesProp): ReactElement {
  return (
    <div className="grid grid-cols-3 lg:grid-cols-6 md:grid-cols-4 gap-1 sm:gap-4">
      {periods.slice(0, 12).map((period: Period) => (
        <div
          key={period.number}
          className="flex flex-col items-center justify-center p-2"
        >
          <div className="text-xs md:text-sm">
            {period.startTime &&
              formatInTimeZone(
                new Date(period.startTime),
                'America/Chicago',
                'MM-dd-yy HH:mm zzz'
              )}
          </div>
          <div className="text-xs md:text-sm">
            {period.temperature} {period.temperatureUnit}
          </div>
          <div className="text-xs md:text-sm">{period.shortForecast}</div>
        </div>
      ))}
    </div>
  );
}
