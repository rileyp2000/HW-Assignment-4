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
	 * removes a tower from the output queue and returns it
	 * @return a tower
	 */
	public Tower removeTower() {
		return output.remove();
	}

}