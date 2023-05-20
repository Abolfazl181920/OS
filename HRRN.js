    // Define a process class with arrival time, burst time, and response ratio
    class Process {
        constructor(arrivalTime, burstTime) {
            this.arrivalTime = arrivalTime
            this.burstTime = burstTime
            this.responseRatio = null
        }
    }
  
    // Initialize the processes and add them to an array
    const processes = [
        new Process(0, 10),
        new Process(1, 3),
        new Process(5, 1),
        new Process(13, 2)
    ]
  
    // Calculate the response ratio for each process
    const calculateResponseRatio = (processes, currentTime) => {
        for (let i = 0; i < processes.length; i++) {
            if (currentTime >= processes[i].arrivalTime) {
                const waitingTime = currentTime - processes[i].arrivalTime
                const remainingTime = processes[i].burstTime
                processes[i].responseRatio = (waitingTime + remainingTime) / remainingTime
            }
        }
    }
  
    // Sort the processes by response ratio in descending order
    const sortByResponseRatio = (processes) => {
        processes.sort((a, b) => b.responseRatio - a.responseRatio)
    }
  
    // Find the next process to execute based on HRRN
    const findNextProcess = (processes, currentTime) => {
        let nextProcess = null
        let highestResponseRatio = -Infinity
            for (let i = 0; i < processes.length; i++) {
                if (processes[i].arrivalTime <= currentTime && processes[i].burstTime > 0) {
                    const responseRatio = (currentTime - processes[i].arrivalTime + processes[i].burstTime) / processes[i].burstTime
                    if (responseRatio > highestResponseRatio) {
                        highestResponseRatio = responseRatio
                        nextProcess = processes[i]
                    }
                }
            }
        return nextProcess
    }
  
    // Run the simulation and print the schedule
    const runSimulation = (processes) => {
        let currentTime = 0
        console.log("Output:")
        while (true) {
            calculateResponseRatio(processes, currentTime)
            sortByResponseRatio(processes)
        const nextProcess = findNextProcess(processes, currentTime)
        if (!nextProcess) {
            break
        }
            console.log(`[${currentTime}-${currentTime + nextProcess.burstTime}] ${nextProcess}`)
            currentTime += nextProcess.burstTime
            nextProcess.burstTime = 0
        }
    }
  
// Run the simulation with the processes defined above
runSimulation(processes)