import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import Card from '../components/Card';
import { AreaChart, Area, ResponsiveContainer, Tooltip as ReTooltip, XAxis, YAxis } from 'recharts';
import { DndContext, closestCenter } from '@dnd-kit/core';
import { arrayMove, SortableContext, useSortable, verticalListSortingStrategy } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';

const usageData = [
  { time: '09:00', req: 420 },
  { time: '10:00', req: 680 },
  { time: '11:00', req: 500 },
  { time: '12:00', req: 760 },
  { time: '13:00', req: 900 },
  { time: '14:00', req: 820 },
];

const SortableItem = ({ id, children }) => {
  const { attributes, listeners, setNodeRef, transform, transition } = useSortable({ id });
  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };
  return (
    <div ref={setNodeRef} style={style} {...attributes} {...listeners} className="cursor-move">
      {children}
    </div>
  );
};

const Dashboard = () => {
  const [items, setItems] = useState([
    { id: 'identity', render: () => (
      <Card title="Identity">
        <div className="space-y-2 text-sm text-text-secondary-dark">
          <p><span className="text-accent-gold">Name:</span> Jane Doe</p>
          <p><span className="text-accent-gold">Email:</span> jane@nexora.dev</p>
          <p><span className="text-accent-gold">Status:</span> Verified</p>
        </div>
      </Card>
    )},
    { id: 'usage', render: () => (
      <Card title="API Usage">
        <div className="text-sm text-text-secondary-dark mb-4">
          <p>Requests today: <span className="text-accent-gold">1,248</span></p>
          <p>Average latency: <span className="text-accent-gold">132ms</span></p>
        </div>
        <div className="h-40">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={usageData} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
              <defs>
                <linearGradient id="goldGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#FFD700" stopOpacity={0.8}/>
                  <stop offset="95%" stopColor="#FFD700" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <XAxis dataKey="time" hide tick={{ fill: '#B0B0B0' }} />
              <YAxis hide tick={{ fill: '#B0B0B0' }} />
              <ReTooltip contentStyle={{ background: '#1C1C1C', border: '1px solid #FFD700', color: '#fff' }} labelStyle={{ color: '#FFD700' }} />
              <Area type="monotone" dataKey="req" stroke="#FFD700" fill="url(#goldGradient)" />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </Card>
    )},
    { id: 'logs', render: () => (
      <Card title="Verification Logs">
        <ul className="text-sm text-text-secondary-dark space-y-1">
          <li>2025-08-14 11:10 - KYC check passed</li>
          <li>2025-08-14 10:54 - Email verified</li>
          <li>2025-08-13 16:21 - Phone verified</li>
        </ul>
      </Card>
    )},
  ]);

  return (
    <div className="flex">
      <Sidebar />
      <main className="flex-1 p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <DndContext collisionDetection={closestCenter} onDragEnd={({ active, over }) => {
          if (!over || active.id === over.id) return;
          const oldIndex = items.findIndex((i) => i.id === active.id);
          const newIndex = items.findIndex((i) => i.id === over.id);
          setItems((prev) => arrayMove(prev, oldIndex, newIndex));
        }}>
          <SortableContext items={items.map((i) => i.id)} strategy={verticalListSortingStrategy}>
            {items.map((item) => (
              <SortableItem key={item.id} id={item.id}>
                {item.render()}
              </SortableItem>
            ))}
          </SortableContext>
        </DndContext>
      </main>
    </div>
  );
};

export default Dashboard;
