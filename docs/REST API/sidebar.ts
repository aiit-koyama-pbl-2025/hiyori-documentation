import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  apisidebar: [
    {
      type: "doc",
      id: "REST API/fastapi",
    },
    {
      type: "category",
      label: "repositories",
      items: [
        {
          type: "doc",
          id: "REST API/delete-repository-api-repositories-repo-id-delete",
          label: "Delete Repository",
          className: "api-method delete",
        },
      ],
    },
    {
      type: "category",
      label: "upload",
      items: [
        {
          type: "doc",
          id: "REST API/upload-file-api-upload-post",
          label: "Upload File",
          className: "api-method post",
        },
      ],
    },
    {
      type: "category",
      label: "UNTAGGED",
      items: [
        {
          type: "doc",
          id: "REST API/read-root-get",
          label: "Read Root",
          className: "api-method get",
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;
