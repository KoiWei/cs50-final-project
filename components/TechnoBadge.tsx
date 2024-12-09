type technoBadgeProps = {
  sectionName: string;
};

function TechnoBadge({ sectionName }: technoBadgeProps) {
  return (
    <div className="mb-3 flex justify-center">
      <div className="text-white shadow-none cursor-default rounded-[20px] bg-[#84645c] px-4 py-1 dark:bg-darkSecondary-300 dark:text-white shadow-none">
        {sectionName}
      </div>
    </div>
  );
}

export default TechnoBadge;
