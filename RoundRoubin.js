const roundRobin = (processes, quantum) => {
    // Clone the array to avoid modifying the original
    const queue = [...processes]
    const completed = []
    let time = 0
    
    while (queue.length > 0) {
      const currentProcess = queue.shift()
      
        if (currentProcess.burstTime <= quantum) {
            // The process completes within the time slice
            time += currentProcess.burstTime
            currentProcess.completionTime = time
            completed.push(currentProcess)
        } else {
            // The process requires more time than the time slice
            time += quantum
            currentProcess.burstTime -= quantum
            queue.push(currentProcess)
        }
    }
    
    return completed
    console.log(completed)
}
  

const processes = [
    { id: 1, burstTime: 11111 },
    { id: 2, burstTime: 3 },
    { id: 3, burstTime: 1 },
    { id: 4, burstTime: 6 }
]
  
const quantum = 3
  
const completedProcesses = roundRobin(processes, quantum)
  
console.log(completedProcesses)