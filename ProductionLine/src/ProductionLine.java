import java.util.LinkedList;
/**
 * This class represnts a Production line, where disks are assembled into towers
 * @author Patrick
 *
 */
public class ProductionLine {
	
	private LinkedList<Disk> input;
	private LinkedList<Tower> output;
	private Tower robotArm;

	public ProductionLine() {
		input = new LinkedList<Disk>();
		output = new LinkedList<Tower>();
		robotArm = new Tower();
	}
	
	/**
	 * gets the input queue
	 * @return the input
	 */
	public LinkedList<Disk> getInput() {
		return input;
	}


	/**
	 * gets the output queue
	 * @return the output queue
	 */
	public LinkedList<Tower> getOutput() {
		return output;
	}


	/**
	 * gets the disks on the "robot arm"
	 * @return the disks on the arm
	 */
	public Tower getRobotArm() {
		return robotArm;
	}

	
	/**
	 * adds a disk to the input queue
	 * @param d the disk to be added
	 */
	public void addDisk(Disk d) {
		input.add(d);
	}
	
	
	/**
	 * this creates the inverted disk tower on the robot's arm
	 */
	public void process() {
		if (!input.isEmpty())
			robotArm.push(input.remove());
		while (!input.isEmpty() && input.peek().getRadius() >= robotArm.peek().getRadius())
			robotArm.push(input.remove());
	}
	
	
	/**
	 * This unloads the tower from the robot arm to the output queue
	 */
	public void unloadRobot() {
		Tower toOutQueue = new Tower();
		for (Disk d : robotArm) {
			toOutQueue.push(d);
		}
		output.add(toOutQueue);
	}
	
	/**
	 * this will operate the robot
	 */
	public void run(){
		while(!input.isEmpty()){
			process();
			unloadRobot();
		}		
	}
	
	/**
	 * removes a tower from the output queue and returns it
	 * @return a tower
	 */
	public Tower removeTower() {
		return output.remove();
	}

}