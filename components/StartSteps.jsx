import styles from "../styles";

const StartSteps = ({ number, text }) => (
  <div className={`${styles.flexCenter} flex-row`}>
    <div className={`${styles.flexCenter} w-[70px] h-[70px] rounded-3xl bg-[#323f5d]`}>
      <p className="text-xl font-bold text-white">{number}</p>
    </div>
    <p className="flex-1 ml-7 font-normal text-lg text-secondary-white leading-8">{text}</p>
  </div>
);

export default StartSteps;
