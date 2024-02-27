import Link from "next/link";
import type { Project } from "../data/projects";

function Project(props: { data: Project }) {
  let statusBgColor;
  let statusTextColor;

  switch (props.data.status) {
    case "Incomplete":
      statusBgColor = "bg-gray-900";
      statusTextColor = "text-gray-500";
      break;
    case "In Progress":
      statusBgColor = "bg-yellow-200";
      statusTextColor = "text-yellow-800";
      break;
    default:
      statusBgColor = "bg-green-200";
      statusTextColor = "text-green-800";
      break;
  }

  return (
    <Link href={props.data.url}>
      <div className="over:bg-gray-100 m-2 rounded-lg border-2 border-gray-600 p-4 text-center shadow-lg transition-colors duration-200">
        <div className="flex flex-col">
          <div className="mb-4 grid grid-cols-2 gap-2">
            <div className="flex items-center justify-center text-lg font-bold">
              {props.data.name}
            </div>
            <div className="ml-auto flex w-32 flex-col">
              <div className="mb-2 inline-block rounded-full bg-blue-200 px-2 py-1 font-semibold text-blue-800">
                {props.data.category}
              </div>
              <div
                className={`${statusTextColor} ${statusBgColor} rounded-full py-1`}
              >
                {props.data.status}
              </div>
            </div>
          </div>
          <div className="text-gray-500">{props.data.description}</div>
        </div>
      </div>
    </Link>
  );
}

export default Project;
