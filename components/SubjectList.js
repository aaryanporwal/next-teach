/* eslint-disable @next/next/no-img-element */
export function SubjectList({ subjectArray }) {
  const listItems = subjectArray.map((subject, index) => {
    return (
      <li className="flex flex-row" key={index}>
        <div className="flex items-center p-4">
          <div className="flex pl-1 mr-16">
            <div className="font-medium dark:text-white">{subject}</div>
          </div>
        </div>
      </li>
    );
  });

  return (
    <div className=" mt-10 container flex flex-col mx-auto w-1/2 items-center justify-center bg-white dark:bg-gray-800 rounded-lg shadow">
      {/* <pre>{JSON.stringify(subjectArray, null, "\t")}</pre> */}
      <ul className="flex flex-col divide divide-y">{listItems}</ul>
    </div>
  );
}
