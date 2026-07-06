import Hero from "../components/Hero";
import jobs from "../data/jobs";
import JobCard from "../components/JobCard";

const Home = () => {
  return (
    <>
      <Hero />

      <section className="max-w-7xl mx-auto px-6 py-16">

        <div className="flex justify-between items-center mb-10">

          <h2 className="text-3xl font-bold">
            Latest Jobs
          </h2>

          <p className="text-gray-500">
            {jobs.length} Jobs Available
          </p>

        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {jobs.map((job) => (
            <JobCard
              key={job.id}
              job={job}
            />
          ))}

        </div>

      </section>
    </>
  );
};

export default Home;