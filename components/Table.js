/* eslint-disable @next/next/no-img-element */
export function Table({ subjectArray, title }) {
  const listItems = subjectArray.map((subject, index) => (
    <ListItem key={index} subject={subject} />
  ));

  return (
    <div className="mt-10 container flex flex-col mx-auto w-1/2 items-center justify-center bg-white dark:bg-gray-800 shadow">
      <h1 className="text-3xl underline text-left">{title}</h1>
      <ul className="flex flex-col divide divide-y">{listItems}</ul>
    </div>
  );
}

function ListItem({ key, subject }) {
  return (
    <li className="flex flex-row" key={key}>
      <div className="flex items-center p-4">
        <div className="flex pl-1 mr-16">
          <div className="dark:text-white">{subject}</div>
        </div>
      </div>
    </li>
  );
}
