// 格式化时间
import { fmtDate } from "@/utils/index";
// 页面内容的元数据
import SITE_CONFIG from "@/config";
const { CreateTime } = SITE_CONFIG;
// 初始化 网站运行时间
export default () => {
  const timeDOM = document.querySelector("em.web_time");
  if (!timeDOM) return;
  if (!CreateTime) return timeDOM.remove();
  timeDOM.textContent = fmtDate(CreateTime)
}