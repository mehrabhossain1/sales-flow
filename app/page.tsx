import Navbar from "@/components/Navbar";
import StatCard from "@/components/StatsCard";
import { Card } from "@/components/ui/card";

export default function Home() {
  return (
    <div className="m-5">
      <Card>
        <Navbar />
        <StatCard />
      </Card>
    </div>
  );
}
