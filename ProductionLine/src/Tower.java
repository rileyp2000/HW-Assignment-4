import java.util.Stack;

/**
 * @author Patrick
 *
 */
@SuppressWarnings("serial")
public class Tower extends Stack<Disk> {
	
	/**
	 * creates a tower that is a stack of disks
	 */
	public Tower() {
		super();
	}
	
	public String toString() {
		String ret = "";
		while(!this.isEmpty()) {
			ret += this.pop();
			ret += "\n";
		}
		return ret;
	}

	
}
