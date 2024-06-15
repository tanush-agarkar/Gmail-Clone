export const API_URLS = {
  saveSentEmail: {
    endpoint: "save",
    method: "POST",
  },
  saveDraftEmails: {
    endpoint: "save-draft",
    method: "POST",
  },
  getEmailFromType: {
    endpoint: "emails",
    method: "GET",
  },
  toggleStarredMails: {
    endpoint: "starred",
    method: "POST",
  },
  deleteEmails: {
    endpoint: "delete",
    method: "DELETE",
  },
  moveEmailsToBin: {
    endpoint: "bin",
    method: "POST",
  },
};
