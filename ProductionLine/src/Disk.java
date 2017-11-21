/**
 * this class represents a disk on the production line with a given radius
 */

/**
 * @author Patrick
 *
 */

public class Disk implements Comparable<Disk> {
	
	private int radius;
	
	public Disk(int r) {
		radius = r;
	}
	
	public int getRadius() {
		return radius;
	}
	
	@Override
	public int compareTo(Disk d2) {
		return radius - d2.getRadius();
	}

}
