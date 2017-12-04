/**
 * this class represents a disk on the production line with a given radius
 */

/**
 * THis class represents a disk that will become part of the production line
 * @author Patrick
 *
 */

public class Disk implements Comparable<Disk> {
	
	private int radius;
	
	public Disk(int r) {
		radius = r;
	}
	
	/**
	 * gets the radius of the disk
	 * @return the radius of the disk
	 */
	public int getRadius() {
		return radius;
	}
	
	@Override
	public int compareTo(Disk d2) {
		return radius - d2.getRadius();
	}
	
	@Override
	public String toString(){
		return "Disk with radius " + radius;
	}
}
