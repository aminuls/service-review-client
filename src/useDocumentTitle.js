import React, { useEffect, useState } from "react";

const useDocumentTitle = (title) => {
   useEffect(() => {
      document.title = title;
   }, [title]);
};

export default useDocumentTitle;
