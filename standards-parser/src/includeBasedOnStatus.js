export default function includeBasedOnStatus(documentStatus, sectionStatus) {
  const statusPriorities = {
    released: 0,
    draft: 1,
    "in-development": 2,
  };

  if (!(sectionStatus.toString() in statusPriorities))
    throw "sectionStatus was passed an invalid priority level";
  if (!(documentStatus.toString() in statusPriorities))
    throw "documentStatus was passed an invalid priority level";

  return statusPriorities[sectionStatus] <= statusPriorities[documentStatus];
}
