//
//  WebViewController.swift
//  Roxa
//
//  Created by Jaxon Stevens on 10/5/17.
//  Copyright © 2017 Jaxon Stevens. All rights reserved.
//
import UIKit
import WebKit

class WebViewController: UIViewController, WKScriptMessageHandler {
    
    @IBOutlet var indigoTestWebView : UIView! = nil
    var webView: WKWebView?
    
    override func viewDidLoad() {
        super.viewDidLoad()
        
        var config = WKWebViewConfiguration()
        
        self.webView = WKWebView(
            frame: self.indigoTestWebView.bounds,
            configuration: config
        )
        self.view = self.webView!
    }
    
    override func viewDidAppear(_ animated: Bool) {
        
        var url = NSURL(string:"http://localhost:2402")
        var req = NSURLRequest(url:url as! URL)
        self.webView!.load(req as URLRequest)
    }
    
    
    func userContentController(_ userContentController: WKUserContentController!, didReceive message: WKScriptMessage!) {

    }
    

    
    
    // Webview did load
    func webViewDidFinishLoad(webView: UIWebView) {
        print("webview did finish load!")
    }
    
    // Webview did fail to load with error
    func webView(webView: UIWebView, didFailLoadWithError error: Error) {
        print("webview did fail load with error: \(error)")
    }
    
    
    override func didReceiveMemoryWarning() {
        super.didReceiveMemoryWarning()
    }
    
    
    
}






