import { Activity, Terminal, Clock, AlertCircle } from 'lucide-react';

export default function EvaluationPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-16">
        <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">Evaluation Protocol</h1>
        <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
          How we benchmark your models on real hardware.
        </p>
      </div>

      <div className="prose prose-blue prose-lg text-gray-500 mx-auto">
        <h3>Overview</h3>
        <p>
          ManipArena employs a rigorous <strong>Online Remote Evaluation</strong> protocol. Unlike traditional static dataset benchmarks,
          participating models are deployed on physical robots in our standardized testing facility. This ensures that the reported
          performance reflects true real-world capability, including robustness to sensor noise, actuation errors, and physical interactions.
        </p>

        <h3>The Evaluation Pipeline</h3>
        <div className="my-8 bg-gray-50 p-6 rounded-lg border border-gray-200">
          <ol className="list-decimal list-inside space-y-4">
            <li><strong>Submission:</strong> You submit a Docker container with your inference code.</li>
            <li><strong>Queueing:</strong> The submission is validated and added to the evaluation queue.</li>
            <li><strong>Deployment:</strong> Our system pulls your container and spins it up on a dedicated compute node connected to the robot.</li>
            <li><strong>Execution:</strong> The robot attempts a series of episodes for each task (typically 50 trials per task).</li>
            <li><strong>Scoring:</strong> Success is automatically determined by sensors and/or human verification.</li>
            <li><strong>Reporting:</strong> Logs, videos, and scores are compiled and sent back to you.</li>
          </ol>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-10">
           <div className="border rounded-md p-4">
              <div className="flex items-center mb-2">
                 <Activity className="h-5 w-5 text-blue-600 mr-2"/>
                 <h4 className="text-lg font-bold text-gray-900">Hardware Setup</h4>
              </div>
              <p className="text-sm">
                 We use a unified hardware platform consisting of 6-DoF robotic arms, parallel jaw grippers, and RGB-D cameras.
                 Detailed specifications are available in the <a href="/docs" className="text-blue-600">Documentation</a>.
              </p>
           </div>
           <div className="border rounded-md p-4">
              <div className="flex items-center mb-2">
                 <Terminal className="h-5 w-5 text-blue-600 mr-2"/>
                 <h4 className="text-lg font-bold text-gray-900">I/O Interface</h4>
              </div>
              <p className="text-sm">
                 Your agent communicates via a local ZeroMQ socket or HTTP API. 
                 Inputs: RGB images (30fps), proprioception. Outputs: Cartesian velocity or joint position commands.
              </p>
           </div>
           <div className="border rounded-md p-4">
              <div className="flex items-center mb-2">
                 <Clock className="h-5 w-5 text-blue-600 mr-2"/>
                 <h4 className="text-lg font-bold text-gray-900">Time Limits</h4>
              </div>
              <p className="text-sm">
                 Each episode has a fixed maximum duration (e.g., 60 seconds). 
                 Inference latency must be kept low (typically &lt;100ms) to ensure smooth control.
              </p>
           </div>
           <div className="border rounded-md p-4">
              <div className="flex items-center mb-2">
                 <AlertCircle className="h-5 w-5 text-blue-600 mr-2"/>
                 <h4 className="text-lg font-bold text-gray-900">Safety</h4>
              </div>
              <p className="text-sm">
                 A safety controller runs in parallel. If your agent commands dangerous velocities or forces, 
                 the robot will emergency stop, and the episode will be marked as a failure.
              </p>
           </div>
        </div>

        <h3>Scoring Metrics</h3>
        <p>
          The primary metric is <strong>Success Rate (SR)</strong> averaged over all test episodes.
          Secondary metrics include:
        </p>
        <ul>
            <li><strong>Execution Time:</strong> Time from start to successful completion.</li>
            <li><strong>Path Efficiency:</strong> Ratio of optimal path length to actual path length.</li>
            <li><strong>Robustness:</strong> Performance drop under perturbed conditions (lighting, clutter).</li>
        </ul>
      </div>
    </div>
  );
}

