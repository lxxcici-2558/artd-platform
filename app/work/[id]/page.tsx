// app/work/[id]/page.tsx

import WorkDetail from '@/app/components/WorkDetail';

// 1. 定义 params 为 Promise 类型 (适应 Next.js 15+)
interface WorkPageProps {
  params: Promise<{ id: string }>;
}

// 2. 将组件标记为 async (异步)
export default async function WorkPage({ params }: WorkPageProps) {
  // 3. 关键步骤：等待参数解析完成
  const resolvedParams = await params;
  
  // 4. 解析完成后，再获取 id 并转为数字
  const id = parseInt(resolvedParams.id);

  // 渲染组件
  return <WorkDetail workId={id} />;
}