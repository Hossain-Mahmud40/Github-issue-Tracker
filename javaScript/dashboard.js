const loadAllIssues = () => {
  fetch("https://phi-lab-server.vercel.app/api/v1/lab/issues")
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      showIssues(data.data);
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

loadAllIssues();
