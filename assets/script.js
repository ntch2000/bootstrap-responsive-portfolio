$("#projectDetails").on("show.bs.modal", function (event) {
  const button = $(event.relatedTarget);
  const project = button.data("project");
});
