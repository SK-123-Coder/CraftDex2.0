// Dependencies
import { useState } from "react";

const docsTree = [
    {
        id:1,
        title:'CraftDex',
        children:[
            {
                id:1,
                title:'Introduction',
                file:'craftdex/introduction.md'
            },{
                id:2,
                title:'Technology',
                file:'craftdex/technology.md'
            },{
                id:3,
                title:'Tools & Service',
                file:'craftdex/tools&services.md'
            },{
                id:4,
                title:'Usecase',
                file:'craftdex/usecase.md'
            }
        ]
    },{
        id:2,
        title:'Image to PDF Converter',
        children:[
            {
                id:1,
                title:'Introduction',
                file:'imagetopdf/introduction.md'
            },{
                id:2,
                title:'Technology',
                file:'imagetopdf/technology.md'
            },{
                id:3,
                title:'Usecase',
                file:'imagetopdf/usecase.md'
            }
        ]
    },{
        id:3,
        title:'LogChart',
        children:[
            {
                id:1,
                title:'Introduction',
                file:'logchart/introduction.md'
            },{
                id:2,
                title:'Technology',
                file:'logchart/technology.md'
            },{
                id:3,
                title:'Usecase',
                file:'logchart/usecase.md'
            }
        ]
    },{
        id:4,
        title:'FAQ',
        file:'faq/faq.md'
    }
]

function TreeNode({ node, onSelectFile, activeFile, setActiveSection }) {
  const [open, setOpen] = useState(false);

  const hasChildren = node.children && node.children.length > 0;
  const isActive = activeFile === node.file;

  const handleClick = () => {
    if (node.file) {
      onSelectFile(node.file);
      setActiveSection(null);
    }

    if (hasChildren) {
      setOpen((prev) => !prev);
    }
  };

  return (
    <li>
      <div
        onClick={handleClick}
        className={`
          flex items-center gap-2
          cursor-pointer
          rounded-md
          px-3 py-2
          transition-all duration-200
          hover:bg-[#10203D]
          ${
            isActive
              ? "bg-blue-600 text-white"
              : "text-gray-300"
          }
        `}
      >
        <span
          className={`transition-transform duration-200 ${
            open ? "rotate-90" : ""
          }`}
        >
          {hasChildren ? "▶" : "•"}
        </span>

        <span>{node.title}</span>
      </div>

      <div
        className={`
          overflow-hidden
          transition-all
          duration-300
          ${
            open
              ? "max-h-[500px] opacity-100"
              : "max-h-0 opacity-0"
          }
        `}
      >
        {hasChildren && (
          <ul className="ml-5 border-l border-[#1B2B45] pl-3">
            {node.children.map((child) => (
              <TreeNode
                key={`${node.id}-${child.id}`}
                node={child}
                onSelectFile={onSelectFile}
                activeFile={activeFile}
                setActiveSection={setActiveSection}
              />
            ))}
          </ul>
        )}
      </div>
    </li>
  );
}

function TopicsSection({
  leftSection,
  onSelectFile,
  activeFile,
  setActiveSection
}) {
  return (
    <div
      className={`overflow-hidden rounded-xl border border-[#1B2B45] bg-[#050B18] text-white ${
        leftSection ? "p-8" : "hidden"
      }`}
    >
      <div className="mb-6 flex items-center justify-between">
        <h2 className="text-xl font-bold">Topics</h2>
      </div>

      <ul className="space-y-1">
        {docsTree.map((item) => (
          <TreeNode
            key={item.id}
            node={item}
            onSelectFile={onSelectFile}
            activeFile={activeFile}
            setActiveSection={setActiveSection}
          />
        ))}
      </ul>
    </div>
  );
}

export default TopicsSection;