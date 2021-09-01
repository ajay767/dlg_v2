import Button from '../Button';
import Typography from '../Typography';

function UpcomingEvent() {
  return (
    <div
      className="rounded-md overflow-hidden relative shadow-lg flex flex-col md:flex-row justify-between items-center h-max bg-gray-800"
      style={{
        backgroundImage:
          ' linear-gradient(125deg, #2a2a2a 50%, rgba(0,0,0,0)), url("/assets/images/party.jpg")',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
      }}
    >
      <div className="p-5 py-5 md:p-10 w-full md:w-6/12 text-white">
        <Typography className="mb-2" type="secondary">
          Upcoming Event
        </Typography>
        <Typography className="mb-2" type="header-caption">
          Let’s build your career together “ We at digital learning group,
          prepare students for future by making them aware of all the
          opportunities available in the digital world and how to make best use
          of them
        </Typography>

        <Button btnType="primary">Register Now</Button>
        <Typography
          type="secondary"
          className="mt-5 w-8/12 flex justify-between items-center  text-white "
        >
          <span className="flex items-center justify-center flex-col">
            12 <span className="text-base font-medium">Days</span>
          </span>
          :
          <span className="flex items-center justify-center flex-col">
            10 <span className="text-base font-medium">Hr</span>
          </span>
          :
          <span className="flex items-center justify-center flex-col">
            09 <span className="text-base font-medium">Min</span>
          </span>
          :
          <span className="flex items-center justify-center flex-col">
            35 <span className="text-base font-medium">Sec</span>
          </span>
        </Typography>
      </div>
    </div>
  );
}

export default UpcomingEvent;
