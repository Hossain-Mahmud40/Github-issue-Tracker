const allBtn = document.getElementById("allBtn");
const openBtn = document.getElementById("openBtn");
const closedBtn = document.getElementById("closedBtn");
const manageSpinner = (status) => {
  const spinner = document.getElementById("spinner");
  const cardContainer = document.getElementById("cardContainer");

  if (!spinner || !cardContainer) return;

  if (status === true) {
    spinner.classList.remove("hidden");
    cardContainer.classList.add("hidden");
  } else {
    cardContainer.classList.remove("hidden");
    spinner.classList.add("hidden");
  }
};
const removeActive = () => {
  allBtn.classList.remove("active");
  openBtn.classList.remove("active");
  closedBtn.classList.remove("active");
};

let allIssues = [];

const loadAllIssues = () => {
  manageSpinner(true);
  fetch("https://phi-lab-server.vercel.app/api/v1/lab/issues")
    .then((res) => res.json())
    .then((data) => {
      allIssues = data.data;

      showIssues(allIssues);
      manageSpinner(false);
    });
};

const showIssues = (issues) => {
  const cardContainer = document.getElementById("cardContainer");

  cardContainer.innerHTML = "";

  issues.forEach((issue) => {
    const issueCard = document.createElement("div");

    const statusBorder =
      issue.status.toLowerCase() === "open"
        ? `border-t-green-500`
        : `border-t-purple-500`;
    const statusIcon =
      issue.status.toLowerCase() === "open"
        ? `./assets/Open-Status.png`
        : `./assets/Closed-Status.png`;

    const labelsHTML = issue.labels
      .filter(
        (label) =>
          label.toLowerCase() !== "good first issue" &&
          label.toLowerCase() !== "documentation",
      )
      .map((label) => {
        return `
          <span class="badge label-${label.toLowerCase().replaceAll(" ", "-")} border-none text-xs">
          ${label}
          </span>
        `;
      })
      .join("");

    issueCard.innerHTML = `
      <div class="bg-white border border-[#E9E9E9] border-t-4 ${statusBorder} rounded-lg shadow-sm p-4">

        <!-- Top -->
        <div class="flex items-center justify-between mb-4">
          <img src="${statusIcon}" class="w-5 h-5" />

          <span class="badge priority-${issue.priority.toLowerCase()} border-none text-xs uppercase">${issue.priority}
          </span>
        </div>
        <h3 class="font-semibold text-sm mb-2">
          ${issue.title}
        </h3>
        <p class="text-xs text-gray-500 mb-4">
          ${issue.description}
        </p>
        <div class="flex flex-wrap items-center gap-2 mb-6">
          ${labelsHTML}
        </div>
        <div class="border-t border-[#E9E9E9] pt-3 text-xs text-gray-500">
          <p>#${issue.id} by ${issue.author}</p>
          <p>${new Date(issue.createdAt).toLocaleDateString()}</p>
        </div>
      </div>
    `;

    cardContainer.append(issueCard);
  });
};
allBtn.addEventListener("click", () => {
  removeActive();
  allBtn.classList.add("active");
  manageSpinner(true);
  showIssues(allIssues);
  manageSpinner(false);
});

openBtn.addEventListener("click", () => {
  removeActive();
  openBtn.classList.add("active");
  manageSpinner(true);
  const openIssues = allIssues.filter(
    (issue) => issue.status.toLowerCase() === "open",
  );

  showIssues(openIssues);
  manageSpinner(false);
});

closedBtn.addEventListener("click", () => {
  removeActive();
  closedBtn.classList.add("active");
  manageSpinner(true);
  const closedIssues = allIssues.filter(
    (issue) => issue.status.toLowerCase() === "closed",
  );

  showIssues(closedIssues);
  manageSpinner(false);
});

loadAllIssues();
