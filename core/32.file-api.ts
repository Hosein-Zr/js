/**
 * file-api.ts
 *
 * THEORY:
 * - The File API allows web apps to read user-selected files (via <input type="file"> or drag & drop).
 * - You can access metadata (name, size, type) and content (via FileReader).
 * - Common use cases: image preview, file uploads, text parsing, client-side validation.
 */

const fileInput = document.querySelector<HTMLInputElement>("#file-input");
const dropZone = document.querySelector<HTMLDivElement>("#drop-zone");
const output3 = document.querySelector<HTMLDivElement>("#file-output3");

// ✅ Handle file selection via input
if (fileInput) {
  fileInput.addEventListener("change", () => {
    if (fileInput.files) {
      handleFiles(fileInput.files);
    }
  });
}

// ✅ Handle drag & drop
if (dropZone) {
  dropZone.addEventListener("dragover", (e) => {
    e.preventDefault();
    dropZone.style.borderColor = "blue";
  });

  dropZone.addEventListener("dragleave", () => {
    dropZone.style.borderColor = "gray";
  });

  dropZone.addEventListener("drop", (e) => {
    e.preventDefault();
    dropZone.style.borderColor = "gray";
    if (e.dataTransfer?.files) {
      handleFiles(e.dataTransfer.files);
    }
  });
}

// ✅ Process files
function handleFiles(files: FileList) {
  Array.from(files).forEach((file) => {
    const info = document.createElement("p");
    info.textContent = `📄 ${file.name} (${Math.round(file.size / 1024)} KB)`;
    output3?.appendChild(info);

    if (file.type.startsWith("image/")) {
      // Preview image
      const img = document.createElement("img");
      img.style.maxWidth = "200px";
      const reader = new FileReader();
      reader.onload = (e) => {
        img.src = e.target?.result as string;
        output3?.appendChild(img);
      };
      reader.readAsDataURL(file);
    } else if (file.type.startsWith("text/")) {
      // Preview text
      const reader = new FileReader();
      reader.onload = (e) => {
        const pre = document.createElement("pre");
        pre.textContent = (e.target?.result as string).slice(0, 200) + "...";
        output3?.appendChild(pre);
      };
      reader.readAsText(file);
    }
  });
}
