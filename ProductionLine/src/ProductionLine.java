import java.util.LinkedList;

/**
 * 
 */

/**
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

	public void addDisk(Disk d) {
		input.add(d);
	}

	public void process() {
		if (!input.isEmpty())
			robotArm.push(input.remove());
		while (!input.isEmpty() && input.peek().getRadius() >= robotArm.peek().getRadius())
			robotArm.push(input.remove());
	}

	public void unloadRobot() {
		Tower toOutQueue = new Tower();
		for (Disk d : robotArm) {
			toOutQueue.push(d);
		}
		output.add(toOutQueue);
	}
	
	public Tower removeTower() {
		return output.remove();
	}

}