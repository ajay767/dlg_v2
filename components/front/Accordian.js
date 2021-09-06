import { useRef, useState } from "react";
import { IoMdAdd } from "react-icons/io";
import { IoMdRemove } from "react-icons/io";
export default function Accordian() {
  const [open, setOpen] = useState(-1);
  let questions = [
    "What exactly is DLG ?",
    "How do I join DLG ?",
    "How can I benefit from DLG ?",
    "Who plans the events ?",
    "How do I contact DLG ?",
  ];
  let answers = [
    "DLG or Digital Learning Group is basically a student run society of Madhav Institute of Technology and Science.We work towards helping students achieve overall personality development and become skilled professionals by teaching them technical and soft skills required in the real world.",
    "We will put up an announcement on our website and our social media handles whenever we are recruiting. Only student of Madhav Institute of Technology and Science can apply.",
    "You can participate in the events/webinars/activities which are frequently organized by us.To get information about our upcoming events, follow our social media handles and visit our website.",
    "Our team of hardworking and creative individuals work together to plan and executive all our activities based on our research about student interests.",
    "To contact us, you can drop a mail at- digitallearninggroupmits@gmail.com.You can also DM us on our Instagram page – digital_learning_group_mits",
  ];

  const HandleAccordian = (index) => {
    if (index === open) {
      setOpen(-1);
    } else {
      setOpen(index);
    }
  };

  const renderAccordian = () => {
    return questions.map((question, index) => {
      return (
        <div
          key={index}
          onClick={() => HandleAccordian(index)}
          className="max-w-2xl"
          data-index={index}
        >
          <div className="flex items-center cursor-pointer justify-between p-2 bg-gray-900 border">
            <h1 className="text-white font-semibold">{question}</h1>
            <span className="text-white">
              {open != index ? <IoMdAdd /> : <IoMdRemove />}
            </span>
          </div>
          <p
            className={`bg-gray-200 px-2 transition-all duration-300 ease-in-out ${
              index == open
                ? "visible h-20 opacity-1"
                : "h-0 opacity-0 invisible"
            }`}
          >
            {answers[index]}
          </p>
        </div>
      );
    });
  };

  return (
    <div className="flex items-center flex-col justify-center w-full">
      {renderAccordian()}
    </div>
  );
}