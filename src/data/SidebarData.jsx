import SecurityIcon from '@mui/icons-material/Security';
import FolderIcon from '@mui/icons-material/Folder';
import HomeIcon from '@mui/icons-material/Home';
import AutoFixHighIcon from '@mui/icons-material/AutoFixHigh';
import StorageIcon from '@mui/icons-material/Storage';
import DonutLargeIcon from '@mui/icons-material/DonutLarge';
import BackupTableIcon from '@mui/icons-material/BackupTable';

export const sidebarData = [
  {
    name: "Seguridad",
    icon: <SecurityIcon />,
    link: "/",
  },
  {
    name: "Proyecto",
    icon: <FolderIcon />,
    link: "/",
  },
  {
    name: "Inicio",
    icon: <HomeIcon />,
    link: "/overview",
  },
  {
    name: "Asistente",
    icon: <AutoFixHighIcon />,
    link: "/",
  },
  {
    name: "Fuentes",
    icon: <StorageIcon />,
    link: "/",
  },
  {
    name: "Paneles",
    icon: <DonutLargeIcon />,
    link: "/",
  },
  {
    name: "Tableros",
    icon: <BackupTableIcon />,
    link: "/",
  }
];