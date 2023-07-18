import { Button } from '@mui/material';
import { GetApp } from '@mui/icons-material';

export default function PWAInstallButton() {
  const handleInstallPWA = () => {
    // 检查浏览器是否支持 PWA 安装功能
    if ('navigator' in window && 'serviceWorker' in navigator) {
      // 弹出安装提示
      navigator.serviceWorker.register('/sw.js');
    }
  };

  return (
    <div>
      <Button
        variant="contained"
        startIcon={<GetApp />}
        size="small"
        onClick={handleInstallPWA}
      >
        Install App
      </Button>
    </div>
  );
}
