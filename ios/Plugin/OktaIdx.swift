import Foundation

@objc public class OktaIdx: NSObject {
    @objc public func echo(_ value: String) -> String {
        print(value)
        return value
    }
}
